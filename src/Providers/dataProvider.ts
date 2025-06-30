import { FirebaseDataProvider } from 'react-admin-firebase';
import { firebaseConfig } from '../Configs/firebaseConfig';

const options = {
  logging: true,
  persistence: 'local' as const,
  lazyLoading: { enabled: true },
  watch: ['posts', 'users'], // colecciones a observar
};

export const dataProvider = FirebaseDataProvider(firebaseConfig, options);