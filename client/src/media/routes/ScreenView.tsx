import {useParams} from 'react-exo/navigation';
import {CurrentFile} from 'media/stacks/CurrentFile';

export default function ScreenView() {
  const {cid, filename} = useParams<{cid: string, filename: string}>();
  const name = filename || '';
  const path = `ipfs://${cid}`;
  const url = `/${cid}/${name}`;
  const ext = name.split('.').pop() || '';
  return (
    <CurrentFile
      {...{name, ext, url, path}}
      close={() => null}
      maximized
      vertical
    />
  );
}
