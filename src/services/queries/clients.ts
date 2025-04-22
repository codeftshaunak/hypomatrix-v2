import { assetImageQuery } from "./common";

export const clientQuery = `
query ClientQuery {
  clients {
    name
    company
    position
    review
    rating
    id
    avatar ${assetImageQuery}
  }
}
`;
