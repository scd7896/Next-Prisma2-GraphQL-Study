/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  JsendPost: { // root type
    message?: string | null; // String
    payload?: NexusGenRootTypes['Post'] | null; // Post
    status?: string | null; // String
  }
  JsendPostList: { // root type
    message?: string | null; // String
    payload?: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    status?: string | null; // String
  }
  Mutation: {};
  Post: { // root type
    authorId: number; // Int!
    description?: string | null; // String
    id: number; // Int!
    image?: string | null; // String
    published: boolean; // Boolean!
    title: string; // String!
  }
  Profile: { // root type
    bio?: string | null; // String
    id: number; // Int!
    published: boolean; // Boolean!
    userId: number; // Int!
  }
  Query: {};
  User: { // root type
    email: string; // String!
    id: number; // Int!
    name?: string | null; // String
    password?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  JsendPost: { // field return type
    message: string | null; // String
    payload: NexusGenRootTypes['Post'] | null; // Post
    status: string | null; // String
  }
  JsendPostList: { // field return type
    message: string | null; // String
    payload: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    status: string | null; // String
  }
  Mutation: { // field return type
    addPosts: NexusGenRootTypes['JsendPost'] | null; // JsendPost
    removePosts: NexusGenRootTypes['JsendPost'] | null; // JsendPost
  }
  Post: { // field return type
    author: NexusGenRootTypes['User']; // User!
    authorId: number; // Int!
    description: string | null; // String
    id: number; // Int!
    image: string | null; // String
    published: boolean; // Boolean!
    title: string; // String!
  }
  Profile: { // field return type
    bio: string | null; // String
    id: number; // Int!
    published: boolean; // Boolean!
    User: NexusGenRootTypes['User']; // User!
    userId: number; // Int!
  }
  Query: { // field return type
    posts: NexusGenRootTypes['JsendPostList'] | null; // JsendPostList
  }
  User: { // field return type
    email: string; // String!
    id: number; // Int!
    name: string | null; // String
    password: string | null; // String
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    profile: NexusGenRootTypes['Profile'] | null; // Profile
  }
}

export interface NexusGenFieldTypeNames {
  JsendPost: { // field return type name
    message: 'String'
    payload: 'Post'
    status: 'String'
  }
  JsendPostList: { // field return type name
    message: 'String'
    payload: 'Post'
    status: 'String'
  }
  Mutation: { // field return type name
    addPosts: 'JsendPost'
    removePosts: 'JsendPost'
  }
  Post: { // field return type name
    author: 'User'
    authorId: 'Int'
    description: 'String'
    id: 'Int'
    image: 'String'
    published: 'Boolean'
    title: 'String'
  }
  Profile: { // field return type name
    bio: 'String'
    id: 'Int'
    published: 'Boolean'
    User: 'User'
    userId: 'Int'
  }
  Query: { // field return type name
    posts: 'JsendPostList'
  }
  User: { // field return type name
    email: 'String'
    id: 'Int'
    name: 'String'
    password: 'String'
    posts: 'Post'
    profile: 'Profile'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addPosts: { // args
      authorEmail: string; // String!
      description?: string | null; // String
      title: string; // String!
    }
    removePosts: { // args
      authorEmail: string; // String!
      id: number; // Int!
    }
  }
  Query: {
    posts: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
}