import Rotator from '../components/Rotator'
import PromoTeaser from '../components/PromoTeaser'
import { items } from '../data/items'
import { rotator } from '../data/rotator'
import { rotator2 } from '../data/rotator2'


const Index = () => (
    <div>
    <h1 style={{ textAlign: 'center' }}>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
        <PromoTeaser items={items} />
        <div style={{height:'20px'}} />
        <Rotator rotator={rotator} />
        <div style={{height:'20px'}} />
        <Rotator rotator={rotator2} />
        <div style={{height:'20px'}} />
  </div>
)

export default Index
