// Libraries Imports...
import { Client, Account, ID, Databases } from "react-native-appwrite";

console.log(process.env?.EXPO_PUBLIC_COLLECTION_ID);


const client = new Client()
  .setProject("679f1c3e00061a839ce7")
  .setPlatform("com.mf.jobsnap");

// Account Instance
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


// Document Instance
const databases = new Databases(client);

export const saveUserInfo = async (data: { userFullName: string, userAge: string, userEmail: string, userFindLocation: string, userPhoneNumber: string }, selectedJobs: string | string[]) => {
  try {
    console.log(selectedJobs);
    const userInfo = await databases.createDocument("67a09b9f002938cd33ef", "67a09bc20013a7477854", ID.unique(), { ...data, selectedJobs })
    return userInfo;
  } catch (error: any) {
    throw new Error(error || "Please try again!")
  }

}
