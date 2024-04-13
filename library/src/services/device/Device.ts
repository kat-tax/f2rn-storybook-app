import type {DeviceBase} from './Device.interface';

export class DeviceService implements DeviceBase {
  BootSplash = {
    hide: async () => {},
    isVisible: async () => false,
    useHideAnimation: () => ({
      logo: {},
      brand: {},
      container: {},
    }),
  }

  share(url: string, title: string) {
    navigator.share({url, title}).catch(() => {});
  }

  async isOnline() {
    return navigator.onLine;
  }

  suscribeOnline(update: (isOnline: boolean) => void) {
    const handler = () => update(navigator.onLine);
    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);
    return () => {
      window.removeEventListener('online', handler);
      window.removeEventListener('offline', handler);
    };
  }
}
