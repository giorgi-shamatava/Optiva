import { describe, expect, it } from 'vitest';
import { prices, whatsappUrl, inquirySchema, inquiryMessage, copy } from '@/lib/optiva';
describe('Confirmed market prices',()=>{
 it('uses exact Georgian rates',()=>expect(prices.ka).toEqual({currency:'₾',basic:1390,care:200,subscription:349}));
 it('uses exact English rates',()=>expect(prices.en).toEqual({currency:'$',basic:600,care:80,subscription:135}));
 it('uses exact Russian rates',()=>expect(prices.ru).toEqual({currency:'₽',basic:50000,care:6500,subscription:11500}));
 it('uses exact Turkish rates',()=>expect(prices.tr).toEqual({currency:'₺',basic:30000,care:4000,subscription:7000}));
});
describe('WhatsApp inquiry rules',()=>{
 it('uses the official number and encodes message safely',()=>{const url=new URL(whatsappUrl('Hello & business?'));expect(url.pathname).toBe('/995597056096');expect(url.searchParams.get('text')).toBe('Hello & business?');});
 it('requires business information',()=>expect(inquirySchema.safeParse({name:'',business:'',country:'',type:'',package:'Basic',website:'',message:''}).success).toBe(false));
 it('rejects oversized input',()=>expect(inquirySchema.safeParse({name:'a'.repeat(101),business:'Company',country:'Georgia',type:'Retail',package:'Basic',website:'A business website',message:''}).success).toBe(false));
 it('includes customer details and selected plan',()=>{const result=inquiryMessage('en',{name:'Alex',business:'Studio',country:'Georgia',type:'Retail',package:'Care',website:'A shop website',message:'Hello'});expect(result).toContain('Full name: Alex');expect(result).toContain('Website package: Care');expect(result).toContain('A shop website');});
 it.each(['en','ka','ru','tr'] as const)('includes the selected package in %s messages',lang=>expect(copy[lang].planMessage('Subscription')).toContain('Subscription'));
});
