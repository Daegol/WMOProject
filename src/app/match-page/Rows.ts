import {Row} from './Row';
import * as data from '../../assets/data/data.json';

export let ROWS: Row[] = [];

data['Business Modeling'].forEach(x => {
    console.log(x);
    ROWS.push({
      discipline: x.Dyscyplina, task: x.Tasks,
      inception: x.Inception, elaboration: x.Elaboration,
      construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts'],class1: x.II,class2: x.V
    });
});
  data['Requirements'].forEach(x => {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts'],class1: x.II,class2: x.V
      });
  });
  data['Analysis and Design'].forEach(x => {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts'],class1: x.II,class2: x.V
      });
  });
  data['Implementation'].forEach(x => {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts'],class1: x.II,class2: x.V
      });
  });
  data['Test'].forEach(x => {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts'],class1: x.II,class2: x.V
      });
  });
  data['Deployment'].forEach(x => {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x['Inception'], elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts'],class1: x.II,class2: x.V
      });
  });
  data['Configuration and CM'].forEach(x => {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts'],class1: x.II,class2: x.V
      });
  });
  data['Project Management'].forEach(x => {
      ROWS.push({
        discipline: x.Dyscyplina, task: x.Tasks,
        inception: x.Inception, elaboration: x.Elaboration,
        construction: x.Construction, transition: x.Transition, role: x['Role Main'], artifacts: x['Output Artifacts'],class1: x.II,class2: x.V
      });
  });
