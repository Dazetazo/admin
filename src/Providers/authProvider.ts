import { FirebaseAuthProvider } from 'react-admin-firebase';
import { firebaseConfig } from '../Configs/firebaseConfig';

const options = {
  logging: true,
  persistence: "local" as "local",
};

export const authProvider = FirebaseAuthProvider(firebaseConfig, options);
