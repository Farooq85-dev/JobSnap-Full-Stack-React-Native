// Libraries Imports...
import { Client, Account, ID } from "react-native-appwrite";

const client = new Client()
  .setProject("679f1c3e00061a839ce7")
  .setPlatform("com.mf.jobsnap");

const account = new Account(client);

export const userSignUp = async (email: string, password: string, name: string): Promise<any> => {
  try {
    const user = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    return user;
  } catch (error: any) {
    throw new Error(error?.message || 'Please try again!');
  }
};


export const userSignIn = async (email: string, password: string): Promise<any> => {
  try {
    const user = await account.createEmailPasswordSession(
      email,
      password
    );

    return user;
  } catch (error: any) {
    throw new Error(error?.message || 'Please try again!');
  }
};
