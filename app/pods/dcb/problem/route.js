import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'hackerblocks/mixins/authenticated-route-mixin';

const AuthenticatedRoute = Route.extend(AuthenticatedRouteMixin)
export default class ProblemRoute extends AuthenticatedRoute {
  model(params) {
    const { contest, dcb } = this.modelFor('dcb')
    const problem = this.store.queryRecord('problem', {
      custom: {
        ext: 'url',
        url: `${params.problem_id}`
      },
      contest_id: contest.id,
      include: 'solution_stubs'
    })
    return RSVP.hash({
      contest,
      problem,
      dcb
    })
  }

  setupController(controller, model) {
    controller.set('contest', model.contest)
    controller.set('problem', model.problem)
    controller.set('dcb', model.dcb)
  }
}
