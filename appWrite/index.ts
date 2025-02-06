// Libraries Imports...
import { Client, Account, ID, Databases, Storage } from "react-native-appwrite";

const client = new Client()
  .setProject("679f1c3e00061a839ce7")
  .setPlatform("com.mf.jobsnap");

// Account Instance
export const account = new Account(client);

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


export const getUser = async () => {
  try {
    const user = await account.get()
    return user
  } catch (error: any) {
    throw new Error(error?.message)
  }
}

// Document Instance
const databases = new Databases(client);

export const saveUserInfo = async (data: { userFullName: string, userAge: string, userEmail: string, userFindLocation: string, userPhoneNumber: string }, selectedJobs: string | string[]) => {
  try {
    const loggedInUser = await getUser();
    const userInfo = await databases.createDocument("67a09b9f002938cd33ef", "67a09bc20013a7477854", loggedInUser?.$id, { ...data, selectedJobs })
    return userInfo;
  } catch (error: any) {
    throw new Error(error?.message || "Please try again!")
  }
}

export const getUserInfo = async () => {
  try {
    const loggedInUser = await getUser();
    const userInfo = await databases.getDocument("67a09b9f002938cd33ef", "67a09bc20013a7477854", loggedInUser?.$id);
    return userInfo;
  } catch (error: any) {
    // throw new Error(error?.message)
    console.log(error?.message);
  }
}

export const logOutUser = async () => {
  try {
    const user = await account.deleteSession("current")
    return user;
  } catch (error: any) {
    throw new Error(error?.message || "Please try again!")
  }
}

// Storage Instance
const storage = new Storage(client);

export const uplaodFile = async (file: { name: string, type: string, size: number, uri: string }, fileId: string) => {
  try {
    await storage.createFile("67a1bc21001a86b300d5", fileId, file)
  } catch (error: any) {
    throw new Error(error?.messgae || "Please try again!")
  }
}