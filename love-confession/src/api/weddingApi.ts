import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config/envConfig";

export interface WeddingCard {
  brideName: string;
  groomName: string;
  path: string;
  template: string;
  brideFather: string;
  brideMother: string;
  groomFather: string;
  groomMother: string;
  invitationText: string;
  location: string;
  mapLink: string;
  theme: string;
  organizationDay?: Date;
  venue?: string;
}

export interface WeddingDetail {
  brideName: string;
  groomName: string;
  path: string;
  template: string;
  brideParents: {
    fatherName?: string;
    motherName?: string;
  };
  groomParents: {
    fatherName?: string;
    motherName?: string;
  };
  organizationDay?: Date;
  venue?: string;
  invitationText?: string;
  location?: string;
  mapLink: string;
  theme?: string;
  // bankAccounts?: Array<CreateBankAccountDto>;
  // comments?: Array<CreateCommentDto>;
  images?: string[];
}

const data = {
  girlParent: {
    father: "Nguyễn Văn Thành",
    mother: "Nguyễn Thị Hồng Nhung",
  },
  boyParent: {
    father: "Trần Minh Quân",
    mother: "Trần Lệ Thu",
  },
};
export const weddingApi = createApi({
  reducerPath: "weddingApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.API_URL }),
  endpoints: (builder) => ({
    createInvitation: builder.mutation<FormData, FormData>({
      query: (invitationData) => ({
        url: "/wedding-cards",
        method: "POST",
        body: invitationData,
      }),
    }),
    getById: builder.query<WeddingDetail, string>({
      query: (id) => `/wedding-cards/${id}`,
    }),
  }),
});

export const { useCreateInvitationMutation, useGetByIdQuery } = weddingApi;
