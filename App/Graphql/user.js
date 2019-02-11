import gql from 'graphql-tag';

const createUser = gql`
  mutation($data: UserCreateInput!) {
    createUser(data: $data) {
      _id
      identifier
      permissions
      identifierType
    }
  }
`;

const me = `
  query {
    me {
      _id
      identifier
      permissions
      identifierType
    }
  }
`;

export { createUser, me };
