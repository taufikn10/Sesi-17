import Layouts from "../../components/Layouts";

interface UsersProps {
  dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  console.log(dataUsers);

  return (
    <Layouts pageTitle="User Page">
      {dataUsers.map((users) => {
        return (
          <>
            <p>{users.name}</p>
            <p>{users.email}</p>
          </>
        );
      })}
    </Layouts>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
