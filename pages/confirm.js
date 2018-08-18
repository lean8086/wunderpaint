
const Confirm = () => (
  <div>
    nada
  </div>
);

Confirm.getInitialProps = async ({ query }) => {
  console.log(query);
  return { awe: true }
};

export default Confirm;
