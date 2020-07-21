import React from "react"
import PropTypes from 'prop-types'

import Grid from "@material-ui/core/Grid"

const HeaderWithActions = ({ title, items }) => (
  <Grid
    container
    direction="row"
    alignItems="center"
    justify="space-between"
  >
    <Grid item xs={12} sm={12} md={6} lg={6}>{title}</Grid>
    <Grid item xs={12} sm={12} md={6} lg={6}>{items}</Grid>
  </Grid>
)

const HeaderWithFilters = ({ title, items }) => (
  <Grid
    container
    direction="row"
    alignItems="center"
    justify="space-between"
  >
    <Grid item xs={12} sm={12} md={12} lg={12}>{title}</Grid>
    <Grid item xs={12} sm={12} md={12} lg={12}>{items}</Grid>
  </Grid>
)

const HeaderTypeMap = new Map([
  ['actions', (title, items) => <HeaderWithActions title={title} items={items} />],
  ['filters', (title, items) => <HeaderWithFilters title={title} items={items} />]
])

const Header = ({ type, title, items }) => (
  HeaderTypeMap.has(type)
    ? HeaderTypeMap.get(type)(title, items)
    : HeaderTypeMap.get('filters')(title, items)
)

const { oneOf, object } = PropTypes

Header.propTypes = {
  type: oneOf(['actions', 'filters']).isRequired,
  title: object,
  items: object,
}

Header.defaultProps = {
  type: 'actions',
  title: <div>Title of page here</div>,
  items: <div>Actions or Filter of page here</div>,
}

export default Header
