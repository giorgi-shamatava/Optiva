import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/optiva-shell';
export const Route=createFileRoute('/privacy')({head:()=>({meta:[{title:'Privacy Policy — OPTIVA'},{name:'description',content:'How OPTIVA handles website inquiries, WhatsApp messages and language preferences.'},{property:'og:title',content:'Privacy Policy — OPTIVA'},{property:'og:description',content:'Privacy information for OPTIVA website visitors.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:()=> <LegalPage kind="privacy"/>});
