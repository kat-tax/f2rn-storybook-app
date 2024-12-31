import {useLingui} from '@lingui/react/macro';
import {useEffect, useState, useMemo} from 'react';
import {getCurrentWeather} from 'home/utils/weather';

import type {Coords} from 'app/data';
import type {Weather} from 'home/utils/weather';

export function useWeather(coords?: Coords | null) {
  const {t} = useLingui();
  const [data, setData] = useState<Weather | null>(null);
  const [text, setText] = useState(t`Loading...`);

  // Update when location changes
  useEffect(() => {
    if (!coords) return;
    getCurrentWeather(coords).then(weather => {
      setText(`${weather.apparentTemperature}°F ${weather.relativeHumidity2m}% H`);
      setData(weather);
    });
  }, [coords]);

  // Return memoized values
  return useMemo(
    () => ({text, data}),
    [text, data],
  );
}
