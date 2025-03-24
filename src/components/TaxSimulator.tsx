
import FadeIn from "@/components/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  Calendar,
  CreditCard,
  DollarSign,
  PiggyBank,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";

// Fee structure based on the CSV data
const fees = {
  boleto: {
    fee: 3.9, // TarifaBoleto
    cancellationFee: 3.9, // TarifaCancelamentoBoleto
  },
  ted: {
    fee: 2.5, // TarifaTED
  },
  debit: {
    fee: 0, // TarifaDebito
    rate: 0, // TaxaDebito
  },
  credit: {
    fee: 0, // TarifaCredito
    rates: {
      oneInstallment: 2.99, // TaxaCredito1
      twoToSix: 3.3, // TaxaCredito2A6
      sevenToTwelve: 3.7, // TaxaCredito7A12
      thirteenToTwentyOne: 3.7, // TaxaCredito13A21
    }
  },
  anticipation: {
    rate: 0.07, // TaxaAntecipacao
    automatic: [
      4.3,   // 1 installment
      6.3,   // 2 installments
      7.5,   // 3 installments
      8.9,   // 4 installments
      9.9,   // 5 installments
      10.9,  // 6 installments
      12.9,  // 7 installments
      13.9,  // 8 installments
      15.9,  // 9 installments
      16.9,  // 10 installments
      17.9,  // 11 installments
      18.9,  // 12 installments
      19.99, // 13 installments
      20.5,  // 14 installments
      20.99, // 15 installments
      22.99, // 16 installments
      23.99, // 17 installments
      24.99, // 18 installments
      25.99, // 19 installments
      26.99, // 20 installments
      27.99  // 21 installments
    ]
  }
};

const TaxSimulator = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [amount, setAmount] = useState(1000);
  const [installments, setInstallments] = useState(1);
  const [automaticAnticipation, setAutomaticAnticipation] = useState(true);
  
  const [receivableAmount, setReceivableAmount] = useState(0);
  const [feeAmount, setFeeAmount] = useState(0);
  const [anticipationFee, setAnticipationFee] = useState(0);
  const [totalFees, setTotalFees] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [receiveDate, setReceiveDate] = useState("");
  
  useEffect(() => {
    calculateResults();
  }, [amount, paymentMethod, installments, automaticAnticipation]);
  
  const calculateResults = () => {
    let calculatedFeeAmount = 0;
    let calculatedAnticipationFee = 0;
    let calculatedFinalAmount = 0;
    let date = new Date();
    date.setDate(date.getDate() + 1); // Default: next business day
    
    if (paymentMethod === "credit") {
      // Apply credit card fees based on installments
      let rate = 0;
      
      if (installments === 1) {
        rate = fees.credit.rates.oneInstallment;
      } else if (installments >= 2 && installments <= 6) {
        rate = fees.credit.rates.twoToSix;
      } else if (installments >= 7 && installments <= 12) {
        rate = fees.credit.rates.sevenToTwelve;
      } else {
        rate = fees.credit.rates.thirteenToTwentyOne;
      }
      
      calculatedFeeAmount = (amount * rate) / 100;
      
      // Apply anticipation fee if selected
      if (automaticAnticipation) {
        // Use automatic anticipation rates based on installments
        const anticipationRate = fees.anticipation.automatic[installments - 1];
        calculatedAnticipationFee = (amount * anticipationRate) / 100;
        date.setDate(date.getDate()); // Next business day after transaction
      } else {
        // Regular payment schedule (30 days for each installment)
        date.setDate(date.getDate() + 29); // 30 days for the first installment
      }
    } else if (paymentMethod === "debit") {
      calculatedFeeAmount = amount * (fees.debit.rate / 100);
      // Debit cards are usually next business day
      date.setDate(date.getDate());
    } else if (paymentMethod === "boleto") {
      calculatedFeeAmount = fees.boleto.fee;
      // Boletos typically take 1-3 business days to process after payment
      date.setDate(date.getDate() + 2);
    } else if (paymentMethod === "pix") {
      // PIX is usually same day or next business day
      calculatedFeeAmount = 0; // No fee for PIX
      date.setDate(date.getDate());
    }
    
    // Calculate final values
    const totalFeesCalculated = automaticAnticipation ? calculatedAnticipationFee : calculatedFeeAmount;
    calculatedFinalAmount = amount - totalFeesCalculated;
    
    // Format date
    const formattedDate = date.toLocaleDateString('pt-BR', {year: "numeric", month: "numeric", day: "numeric"});
    
    // Update state
    setReceivableAmount(amount);
    setFeeAmount(calculatedFeeAmount);
    setAnticipationFee(calculatedAnticipationFee);
    setTotalFees(totalFeesCalculated);
    setFinalAmount(calculatedFinalAmount);
    setReceiveDate(formattedDate);
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Simule quanto você vai receber
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Use nossa calculadora para simular quanto você receberá ao utilizar a RecebeAqui para suas vendas.
          </p>
          
          <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6 lg:p-8 bg-primary-50">
                  <div className="flex items-center gap-2 mb-6">
                    <Calculator size={24} className="text-primary" />
                    <h3 className="text-xl font-semibold">Detalhes da transação</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="payment-method">Forma de pagamento</Label>
                      <Tabs defaultValue="credit" value={paymentMethod} onValueChange={setPaymentMethod} className="w-full">
                        <TabsList className="w-full grid grid-cols-4">
                          <TabsTrigger value="credit">
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span className="hidden sm:inline">Crédito</span>
                          </TabsTrigger>
                          <TabsTrigger value="debit">
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span className="hidden sm:inline">Débito</span>
                          </TabsTrigger>
                          <TabsTrigger value="pix">
                            <Zap className="mr-2 h-4 w-4" />
                            <span className="hidden sm:inline">PIX</span>
                          </TabsTrigger>
                          <TabsTrigger value="boleto">
                            <Calendar className="mr-2 h-4 w-4" />
                            <span className="hidden sm:inline">Boleto</span>
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="transaction-value">Valor da venda (R$)</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input
                          id="transaction-value"
                          type="number"
                          min="0"
                          placeholder="1000.00"
                          className="pl-10"
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                        />
                      </div>
                    </div>
                    
                    {paymentMethod === "credit" && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="installments">Número de parcelas</Label>
                          <Select 
                            value={installments.toString()} 
                            onValueChange={(value) => setInstallments(Number(value))}
                          >
                            <SelectTrigger id="installments">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 21 }, (_, i) => i + 1).map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num}x {num === 1 ? 'sem juros' : ''}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="anticipation">Antecipação automática</Label>
                            <p className="text-sm text-gray-500">Receba em 1 dia útil</p>
                          </div>
                          <Switch
                            id="anticipation"
                            checked={automaticAnticipation}
                            onCheckedChange={setAutomaticAnticipation}
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-gray-100">
                  <div className="flex items-center gap-2 mb-6">
                    <PiggyBank size={24} className="text-primary" />
                    <h3 className="text-xl font-semibold">Você vai receber</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Valor líquido:</p>
                      <p className="text-3xl font-bold text-green-600">
                        R$ {finalAmount.toFixed(2).replace('.', ',')}
                      </p>
                      
                      <div className="flex items-center mt-3 text-sm text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>Pagamento em: <strong>{receiveDate}</strong></span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Valor bruto:</span>
                        <span>R$ {receivableAmount.toFixed(2).replace('.', ',')}</span>
                      </div>
                      
                      {paymentMethod === "credit" && !automaticAnticipation && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Taxas:</span>
                          <span>-R$ {feeAmount.toFixed(2).replace('.', ',')}</span>
                        </div>
                      )}

                      {paymentMethod === "credit" && automaticAnticipation && installments > 1 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Taxas:</span>
                          <span>-R$ {anticipationFee.toFixed(2).replace('.', ',')}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between font-medium pt-2 border-t">
                        <span>Total de taxas:</span>
                        <span>R$ {totalFees.toFixed(2).replace('.', ',')}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <p className="font-medium mb-2">Com a RecebeAqui você tem:</p>
                      <ul className="space-y-1">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Sem mensalidade ou taxas fixas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Proteção contra fraudes e chargebacks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>Certificação PCI DSS e parceria com a B3</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
};

export default TaxSimulator;
