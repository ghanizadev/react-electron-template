import { app, ipcMain } from "electron";

ipcMain.on("close", () => {
  app.quit();
});
