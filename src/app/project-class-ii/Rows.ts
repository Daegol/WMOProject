import {Row} from './Row';
import * as data from '../../assets/data/data.json';

export let ROWS: Row[] = [];

data['Business Modeling'].forEach(x => {
  if ( x.V === 'x') {
    console.log(x);
    ROWS.push({
      discipline: x.Dyscyplina, task: x.Tasks,
      inception: x.Inception, elaboration: x.Elaboration,
      construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts']
    });
  }
});
  data['Requirements'].forEach(x => {
    if ( x.V === 'x') {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts']
      });
    }
  });
  data['Analysis and Design'].forEach(x => {
    if ( x.V === 'x') {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts']
      });
    }
  });
  data['Implementation'].forEach(x => {
    if ( x.V === 'x') {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts']
      });
    }
  });
  data['Test'].forEach(x => {
    if ( x.V === 'x') {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts']
      });
    }
  });
  data['Deployment'].forEach(x => {
    if ( x.V === 'x') {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x['Inception'], elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts']
      });
    }
  });
  data['Configuration and CM'].forEach(x => {
    if ( x.V === 'x') {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts']
      });
    }
  });
  data['Project Management'].forEach(x => {
    if ( x.V === 'x') {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts']
      });
    }
  });
