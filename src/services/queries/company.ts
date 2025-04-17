import { assetImageQuery } from "./common";

export const companyQuery = `query CompanyQuery{
 companies{
    title
    logo ${assetImageQuery}
}
}`;
