import { test } from '@playwright/test';
import path from 'path';

test('Single File upload @UploadFiles', async ({ page }) => {
    await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
    await page.locator('input[name="upfile"]').setInputFiles("C:/play_wright/package.json");



});

test('Multiple File upload @UploadFiles', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles([
        path.join('C:/play_wright', 'package.json'),
        path.join('C:/play_wright', 'tsconfig.json')
    ]);


    // await page.locator('#filesToUpload').setInputFiles([
    //   'C:/play_wright/package.json',
    //   'C:/play_wright/tsconfig.json'
    // ]);


});

test.only('File Download @DWFile', async ({ page }) => {

    await page.goto('https://www.commitquality.com/practice-file-download');
    const waitForDownloadEvent = page.waitForEvent("download");
    await page.getByRole('button', { name: 'Download File' }).click();
    const download = await waitForDownloadEvent;
    await download.saveAs(path.join('C:/play_wright/downloads', download.suggestedFilename()));
});
