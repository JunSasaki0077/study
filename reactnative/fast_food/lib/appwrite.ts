import { CreateUserPrams, GetMenuParams, SignInParams } from "@/type"
import { Account, Avatars, Client, Databases, ID, Query, Storage } from "react-native-appwrite"

export const appwriteConfig = {
	endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
	projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
	platform: "com.jsm.foodordering",
	databaseId: "6876c3990008e6e74201",
	bucketId:"687eae8c0030313a1334",
	userCollectionId: "6876c45f00297e8ea7dc",
	categoriesCollectionId: "687dfcfe003dc34985df",
	menuCollectionId:"687ea4460039adcb6a6f",
	customizationsCollectionId:"687ea608000b0df786e2",
	menuCustomizationsCollectionId:"687ea8590033b0bb1737"
}

export const client = new Client()

client
.setEndpoint(appwriteConfig.endpoint)
.setProject(appwriteConfig.projectId) 
.setPlatform(appwriteConfig.platform)

export const account = new Account(client)
export const databases = new Databases(client)
export const avatars = new Avatars(client)
export const storage = new Storage(client)

export const createUser = async ({email,password,name}: CreateUserPrams) => {
	try {
		const newAccount = await account.create(ID.unique(),email,password,name)
		if(!newAccount)  throw Error;

		 await signIn({email,password})

		const avatarUrl = avatars.getInitialsURL

		return await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			ID.unique(),
			{
				email,name,
				accountId:newAccount.$id,
				avatar:avatarUrl
			}
		)

	} catch (error) {
		throw new Error(error as string)
	}
}

export const signIn = async ({email,password}: SignInParams) => {
try {
	const session = await account.createEmailPasswordSession(email,password)
} catch (error) {
	throw new Error(error as string) 
}
}

export const getCurrentUser = async () => {
	try {
		const currentAccount = await account.get();
		if(!currentAccount) throw Error

		const currentUser = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.userCollectionId,
			[Query.equal("accountId",currentAccount.$id)]
		)  

		if(!currentUser) throw Error
		return currentUser.documents[0]
	} catch (error) {
		console.error(error)
		throw new Error(error as string)
	}
}

export const getMenu = async ({category,query}: GetMenuParams) => {
	try {
		const queries: string[] = [];
	
if(category) queries.push(Query.equal("categories",category))
	if(query) queries.push(Query.search("name",query))

		const menues = await databases.listDocuments(
			appwriteConfig.databaseId,
			appwriteConfig.menuCollectionId,
			queries
		)
		return menues.documents
	} catch (error) {
		throw new Error(error as string)
	}

}

export const getCategories = async () => {
	try {
		const categories = await databases.listDocuments(

			appwriteConfig.databaseId,
			appwriteConfig.categoriesCollectionId,
		)
return categories.documents

	} catch (error) {
		throw new Error(error as string)
		
	}
}