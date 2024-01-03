import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploader = await uploadPhoto();
    const creator = await createUser();

    return ({ photo: uploader, user: creator });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
