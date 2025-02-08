// Libraries Imports...
import { Client, Account, ID, Databases, Storage } from "react-native-appwrite";

const projectId = process.env?.EXPO_PUBLIC_APPWRITE_PROJECT_ID;
const platform = process.env?.EXPO_PUBLIC_PROJECT_NAME;
const dbID = process.env?.EXPO_PUBLIC_DATABASE_ID;
const userInfoCollectionId = process.env?.EXPO_PUBLIC_USER_COLLECTION_ID;
const storageId = process.env?.EXPO_PUBLIC_STORAGE_ID;

const client = new Client()
  .setProject(projectId!)
  .setPlatform(platform!);

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
    const userInfo = await databases.createDocument(dbID!, userInfoCollectionId!, loggedInUser?.$id, { ...data, selectedJobs })
    return userInfo;
  } catch (error: any) {
    throw new Error(error?.message || "Please try again!")
  }
}

export const getUserInfo = async () => {
  try {
    const loggedInUser = await getUser();
    const userInfo = await databases.getDocument(dbID!, userInfoCollectionId!, loggedInUser?.$id);
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
    await storage.createFile(storageId!, fileId, file)
  } catch (error: any) {
    throw new Error(error?.messgae || "Please try again!")
  }
}