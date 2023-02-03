import app from "./app";

async function main() {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`server is listened on http://localhost:${port}`);
  });
};

main();
