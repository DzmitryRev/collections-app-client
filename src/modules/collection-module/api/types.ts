export type CollectionType = {
  id: string;
  user: string;
  name: string;
  description: string;
  theme: string;
  photo: string;
  requiredFields: AnyFieldType[];
  customFields: AnyFieldType[];
};

export type CollectionItemType = {
  body: { [key: string]: unknown };
  collectionId: string;
  id: string;
  likes: string[];
  user: string;
};

export type CollectionInCollectionList = Omit<
  CollectionType,
  "description" | "requiredFields" | "customFields"
>;

export type CollectionList = {
  collections: CollectionInCollectionList[];
  total: number;
};

export type AddCollectionBodyType = {
  userId: string;
  name: string;
  theme: string;
};

export type FieldTypes = "string" | "text" | "number" | "checkbox" | "date" | "tags";

type CollectionFieldType<K extends FieldTypes> = {
  name: string;
  type: K;
};

type FieldVariants = {
  variants?: string[];
};

export type StringField = CollectionFieldType<"string" | "text"> & FieldVariants;
export type NumberField = CollectionFieldType<"number"> & FieldVariants;
export type TagsField = CollectionFieldType<"tags"> & FieldVariants;
export type BooleanField = CollectionFieldType<"checkbox">;
export type DateField = CollectionFieldType<"date">;

export type AnyFieldType = StringField | NumberField | TagsField | BooleanField | DateField;

export type CollectionBodyType = Omit<CollectionType, "_id">;
