import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import customTabsStyle from 'assets/jss/material-dashboard-react/components/customTabsStyle.jsx'

class CustomTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, value) { this.setState({ value }) }

  render() {
    const { classes, headerColor, plainTabs, tabs, title, rtlActive } = this.props
    const cardTitle = classNames({ [classes.cardTitle]: true, [classes.cardTitleRTL]: rtlActive })

    return (
      <Card plain={plainTabs}>
        <CardHeader color={'grey'} plain={plainTabs} style={{ display: 'grid', background: headerColor }}>
          {title !== undefined ? (
            <div className={cardTitle}>{title}</div>
          ) : null}
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.displayNone,
              scrollButtons: classes.displayNone
            }}
            scrollable
            scrollButtons='auto'
          >
            {tabs.map((prop, key) => {
              var icon = {}
              const state = prop.tabContent.props.state
              if (prop.tabIcon) {
                icon = { icon: <prop.tabIcon /> }
              }
              return (
                <Tab
                  classes={{
                    root: classes[ state ? 'tabRootButtonGreen' : 'tabRootButtonRed' ],
                    labelContainer: classes.tabLabelContainer,
                    label: classes.tabLabel,
                    selected: classes.tabSelected,
                    wrapper: classes.tabWrapper,
                    textColorPrimary: classes.tabColor
                  }}
                  key={key}
                  label={prop.tabName}
                  {...icon}
                />
              )
            })}
          </Tabs>
        </CardHeader>
        <CardBody>
          {tabs.map((prop, key) => {
            if (key === this.state.value) {
              return <div key={key}>{prop.tabContent}</div>
            }
            return null
          })}
        </CardBody>
      </Card>
    )
  }
}

CustomTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  headerColor: PropTypes.string,
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
}

export default withStyles(customTabsStyle)(CustomTabs)
