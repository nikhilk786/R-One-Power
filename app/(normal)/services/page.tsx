import ServiceBanner from '@/component/services/ServiceBanner'
import ServiceGrid from '@/component/services/ServiceGrid'
import ServiceTabs from '@/component/services/ServiceTabs'
import React from 'react'

const page = () => {
  return (
    <div>
      <ServiceBanner/>
      <ServiceTabs/>
      <ServiceGrid/>
    </div>
  )
}

export default page
