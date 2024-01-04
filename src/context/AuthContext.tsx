import React from 'react';
import { api } from '../services/api';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../model/user';

interface IAuthState {
  token: string;
  user: IUser;
}

interface ICredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser;
  signIn(credentials: ICredentials): void;
  signOut(): void;
  updateUser(user: IUser): void;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

const tokenData = '@stockProduct:token';
const userData = '@stockProduct:user';

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [data, setData] = React.useState<IAuthState>({} as IAuthState);

  React.useEffect(() => {
    async function loadAuthData() {
      const token = await AsyncStorage.getItem(tokenData);
      const user = await AsyncStorage.getItem(userData);

      if (token && user) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({ token, user: JSON.parse(user) });
      }
    }

    loadAuthData();
  }, []);

  const signIn = async ({ email, password }: ICredentials) => {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      await AsyncStorage.setItem(tokenData, token);
      await AsyncStorage.setItem(userData, JSON.stringify(user));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ token, user });
    } catch (error) {
      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro fazer login, verifique as credenciais.',
      );
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem(tokenData);
    await AsyncStorage.removeItem(userData);
    setData({} as IAuthState);
  };
  const updateUser = async (user: IUser) => {
    await AsyncStorage.setItem(userData, JSON.stringify(user));
    setData({ user, token: data.token });
  };

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado em um AuthProvider.');
  }

  return context;
};
