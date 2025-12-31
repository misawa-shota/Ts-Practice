async function main() {
  try {
    const { readFile, writeFile } = await import("fs/promises");
    const fooContent = await readFile("./foo.txt", "utf-8");
    await writeFile("bar.txt", fooContent);
    console.log("書き込み完了しました。");
  } catch {
    console.log("失敗しました");
  }
}

main().then((() => {
  console.log("main()が完了しました。");
}));