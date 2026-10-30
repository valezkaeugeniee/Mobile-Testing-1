import fs from 'node:fs';

describe('Launch aplikasi Settings', () => {
  it('app terbuka dan screenshot tersimpan', async () => {
    await driver.pause(3000);

    const pkg = await driver.getCurrentPackage();
    console.log('Current package:', pkg);
    expect(pkg).toBe('com.android.settings');

    fs.mkdirSync('./screenshots', { recursive: true });
    await driver.saveScreenshot('./screenshots/app-launch.png');
    console.log('Screenshot saved: screenshots/app-launch.png');
  });
});