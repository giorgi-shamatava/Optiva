import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/optiva-shell';
export const Route=createFileRoute('/terms')({head:()=>({meta:[{title:'Terms of Service — OPTIVA'},{name:'description',content:'OPTIVA service information, package agreements and project requirements.'},{property:'og:title',content:'Terms of Service — OPTIVA'},{property:'og:description',content:'Service and package information for OPTIVA website projects.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:()=> <LegalPage kind="terms"/>});
