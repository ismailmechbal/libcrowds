/**
 * Fetch a project template by ID.
 */
export const fetchTemplateById = {
  fetch ({ params, app, error, store }) {
    const endpoint = `/lc/users/${params.name}/templates/${params.id}`
    return app.$axios.$get(endpoint).then(data => {
      store.dispatch('UPDATE_CURRENT_TEMPLATE', data.template)
    }).catch(err => {
      error(err)
    })
  }
}
