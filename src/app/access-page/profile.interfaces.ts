export interface UserInterface {
  token: string;
  userId?: string;
  name?: string;
  username?: string;
  email?: string;
  cpf?: string;
  birthdate?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  extra_data?: {};
  is_completed?: boolean;
  phone_verified?: boolean;
  last_phone_verification?: string;
  facematch_progress?: any;
  terms_accepted?: boolean;
  policies_accepted?: boolean;
  marketing_terms_accepted?: boolean;
  contact_terms_accepted?: boolean;
  whatsapp_terms_accepted?: boolean;
  profile_image?: any;
  qrs_password?: string;
  c2c_seller?: boolean;
  register_seller?: boolean;
  c2c_terms_accepted?: boolean;
  c2c_status?: string;
  perimeter?: number;
  profile?: string;
  positions?: string;
  company?: {
    cnpj?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: string;
    zipcode?: string;
    district?: string;
    company_name?: string;
    fantasy_name?: string;
    social_registration?: string;
    phone?: string;
    email?: string;
    main_activity?: string;
    business?: string;
    complement?: string;
    is_rca_client: boolean;
  };
  is_rca_client: boolean;
}

export interface UserProfileInterface {
  id: string;
  username: string;
  email: string;
  cpf: string;
  phone: string;
  first_name: string;
  last_name: string;
  extra_data: {};
  is_valid_facedocument: boolean;
  facematch_progress?: any;
  c2c_seller?: boolean;
  c2c_status?: string;
  perimeter?: number;
  company?: {
    cnpj?: string;
    is_rca_client: boolean;
  };
  is_rca_client: boolean;
}

export interface FacebookProfileInterface {
  email: string;
  id: string;
  picture_large: Picturelarge;
  name: string;
  first_name: string;
  // login?: FacebookLoginResponse;
}

export interface Picturelarge {
  data: Data;
}

export interface Data {
  is_silhouette: boolean;
  height: number;
  url: string;
  width: number;
}

export interface GoogleProfileInterface {
  accessToken: string;
  expires: number;
  expires_in: number;
  email: string;
  idToken: string;
  serverAuthCode: string;
  userId: string;
  displayName: string;
  familyName: string;
  givenName: string;
  imageUrl: string;
}

export interface User {
  email: any;
  password: any;
  user: any;
  id: any;
}

export interface SocialAPIResponse {
  auth_token: string;
  user: User;
  data_required: {};
}
