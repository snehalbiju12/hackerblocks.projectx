import Component from '@ember/component';
import { computed } from '@ember/object';

export default class DailyGoalCardSmall extends Component{
  @computed('level')
  get progress() {
    return (this.level.perfectSubmissionCount / this.level.nextRequiredSubmissionCount)*100
  }
}
