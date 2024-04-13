import {t} from '@lingui/macro';
import {Link} from 'react-exo/navigation';
import {useLingui} from '@lingui/react';
import {useLists} from 'tasks/hooks/useLists';
import {Page} from 'core/components/Page';

export default function TasksList() {
  const tasks = useLists();
  useLingui();
  return (
    <Page title={t`Tasks`}>
      {tasks.map(id =>
        <Link key={id} to={`/tasks/${id}`} style={{color: 'white'}}>
          {id}
        </Link>
      )}
    </Page>
  );
}
