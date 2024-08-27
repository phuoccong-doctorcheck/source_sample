import { ReactNode } from 'react'
import TopLoader from '../components/TopLoader';
import Layout from 'antd/es/layout/layout';
import Footer from './../components/Footer/index';
import HeaderNav from './../components/HeaderNav/index';
interface IProps {
    children: ReactNode;
}

const PublicLayout = ({children} : IProps) => {
  return (
    <div>
      <TopLoader/>
      <Layout>
        <HeaderNav/>
          {children}
        <Footer/>
      </Layout>
    </div>
  )
}

export default PublicLayout
