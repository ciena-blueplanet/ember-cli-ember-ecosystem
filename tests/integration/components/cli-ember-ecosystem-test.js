import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'cli-ember-ecosystem',
  'Integration: EmberCliEmberEcosystemComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value')
      // Handle any actions with this.on('myAction', function (val) { ... })
      // Template block usage:
      // this.render(hbs`
      //   {{#cli-ember-ecosystem}}
      //     template content
      //   {{/cli-ember-ecosystem}}
      // `)

      this.render(hbs`{{cli-ember-ecosystem}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
