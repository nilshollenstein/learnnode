function delay(ms, shouldFail = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Die Operation ist fehlgeschlagen."));
      } else {
        resolve("Die Operation war erfolgreich.");
      }
    }, ms);
  });
}
async function foo() {
  console.log("Starte Foo");
  await delay(2000);
  console.log("Foo beendet");
}

async function bar() {
  console.log("Starte Bar");
  await delay(1000);
  console.log("Bar beendet");
}

async function main() {
  console.log("Starte das Hauptprogramm");

  // Starte foo und bar parallel
  const promise1 = foo();
  const promise2 = bar();

  // Warte darauf, dass sowohl foo als auch bar beendet sind
  await promise1;
  await promise2;

  console.log("Hauptprogramm beendet");
}

// Aufruf der Hauptfunktion
main();
console.log("ello");
