import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Info, HelpCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import FadeIn from "./FadeIn";

const feeStructure = {
  boleto: 3.9,
  cancelamentoBoleto: 3.9,
  ted: 2.5,
  debito: {
    tarifa: 0,
    taxa: 0
  },
  credito: {
    tarifa: 0,
    taxas: {
      parcela1: 2.99,
      parcela2a6: 3.3,
      parcela7a12: 3.7,
      parcela13a21: 3.7
    }
  },
  antecipacao: {
    taxaAvulsa: 0.07,
    taxaAutomatica: [
      4.3,   // 1 parcela
      6.3,   // 2 parcelas
      7.5,   // 3 parcelas
      8.9,   // 4 parcelas
      9.9,   // 5 parcelas
      10.9,  // 6 parcelas
      12.9,  // 7 parcelas
      13.9,  // 8 parcelas
      15.9,  // 9 parcelas
      16.9,  // 10 parcelas
      17.9,  // 11 parcelas
      18.9,  // 12 parcelas
      19.99, // 13 parcelas
      20.5,  // 14 parcelas
      20.99, // 15 parcelas
      22.99, // 16 parcelas
      23.99, // 17 parcelas
      24.99, // 18 parcelas
      25.99, // 19 parcelas
      26.99, // 20 parcelas
      27.99  // 21 parcelas
    ]
  }
};

const TaxSimulator = () => {
  const [saleValue, setSaleValue] = useState<string>("1000");
  const [installments, setInstallments] = useState<string>("1");
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "debit" | "pix" | "boleto">("credit");
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  const getTaxRate = () => {
    const installmentsNum = parseInt(installments) || 1;
    
    if (paymentMethod === "credit") {
      // Base credit card fee based on installments
      let baseTax = 0;
      if (installmentsNum === 1) {
        baseTax = feeStructure.credito.taxas.parcela1;
      } else if (installmentsNum >= 2 && installmentsNum <= 6) {
        baseTax = feeStructure.credito.taxas.parcela2a6;
      } else if (installmentsNum >= 7 && installmentsNum <= 12) {
        baseTax = feeStructure.credito.taxas.parcela7a12;
      } else {
        baseTax = feeStructure.credito.taxas.parcela13a21;
      }
      
      // If auto advance is on, add the appropriate advance fee
      if (autoAdvance && installmentsNum > 1) {
        return feeStructure.antecipacao.taxaAutomatica[installmentsNum - 1];
      }
      
      return baseTax;
    } else if (paymentMethod === "debit") {
      return feeStructure.debito.taxa;
    } else if (paymentMethod === "boleto") {
      return 1.99; // Fixed percentage for boleto
    } else {
      return 0.99; // Fixed percentage for PIX
    }
  };
  
  const getFixedFee = () => {
    if (paymentMethod === "boleto") {
      return feeStructure.boleto;
    } else if (paymentMethod === "ted") {
      return feeStructure.ted;
    }
    return 0;
  };

  const calculateResults = () => {
    const value = parseFloat(saleValue.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
    const installmentsNum = parseInt(installments) || 1;
    const taxRate = getTaxRate() / 100; // Convert percentage to decimal
    const fixedFee = getFixedFee();
    
    const taxAmount = (value * taxRate) + fixedFee;
    const netValue = value - taxAmount;
    
    // Calculate estimated receipt date
    let receiptDate = "";
    if (autoAdvance || installmentsNum === 1) {
      receiptDate = "1 dia útil";
    } else {
      receiptDate = "30 dias (1ª parcela)";
    }
    
    // Calculate savings compared to market average
    const marketAverageTax = 0.0499; // 4.99% market average
    const marketAvgAmount = value * marketAverageTax;
    const savings = marketAvgAmount - taxAmount;
    
    return {
      grossValue: value,
      taxAmount,
      taxRate: taxRate * 100,
      netValue,
      receiptDate,
      marketAvgAmount,
      savings
    };
  };

  const results = calculateResults();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "saleValue") {
      // Remove non-numeric characters but keep commas and dots
      const cleanValue = value.replace(/[^\d,.-]/g, '');
      setSaleValue(cleanValue);
    } else if (name === "installments") {
      // Ensure it's a number between 1 and 21
      const installmentsValue = Math.min(21, Math.max(1, parseInt(value) || 1));
      setInstallments(installmentsValue.toString());
    }
  };

  // Determine if installments should be enabled (only for credit card)
  const isInstallmentsEnabled = paymentMethod === "credit";

  return (
    <section id="simulador" className="py-20 bg-white">
      <div className="container-custom">
        <FadeIn>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
            Simulador de Taxas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Calcule quanto você vai receber por cada venda e quanto economizará com o RecebeAqui
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn>
            <Card className="border-2 border-gray-100">
              <CardHeader>
                <CardTitle>Simulador de Taxas</CardTitle>
                <CardDescription>
                  Configure os detalhes da sua venda para calcular o valor que você receberá
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="saleValue">Valor da venda</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                      <Input
                        id="saleValue"
                        name="saleValue"
                        className="pl-9"
                        value={saleValue}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Método de pagamento</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <Button
                        type="button"
                        variant={paymentMethod === "credit" ? "default" : "outline"}
                        className={paymentMethod === "credit" ? "bg-primary" : ""}
                        onClick={() => setPaymentMethod("credit")}
                      >
                        Cartão de Crédito
                      </Button>
                      <Button
                        type="button"
                        variant={paymentMethod === "debit" ? "default" : "outline"}
                        className={paymentMethod === "debit" ? "bg-primary" : ""}
                        onClick={() => setPaymentMethod("debit")}
                      >
                        Cartão de Débito
                      </Button>
                      <Button
                        type="button"
                        variant={paymentMethod === "pix" ? "default" : "outline"}
                        className={paymentMethod === "pix" ? "bg-primary" : ""}
                        onClick={() => setPaymentMethod("pix")}
                      >
                        PIX
                      </Button>
                      <Button
                        type="button"
                        variant={paymentMethod === "boleto" ? "default" : "outline"}
                        className={paymentMethod === "boleto" ? "bg-primary" : ""}
                        onClick={() => setPaymentMethod("boleto")}
                      >
                        Boleto
                      </Button>
                    </div>
                  </div>

                  {isInstallmentsEnabled && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="installments">Número de parcelas</Label>
                        <Input
                          id="installments"
                          name="installments"
                          type="number"
                          min="1"
                          max="21"
                          value={installments}
                          onChange={handleInputChange}
                          disabled={!isInstallmentsEnabled}
                        />
                        <p className="text-xs text-gray-500">De 1 a 21 parcelas</p>
                      </div>

                      {parseInt(installments) > 1 && (
                        <div className="flex items-center justify-between space-x-2 p-4 rounded-lg bg-gray-50">
                          <div className="flex items-center space-x-2">
                            <Label htmlFor="auto-advance" className="cursor-pointer">
                              Antecipação automática
                            </Label>
                            <Popover>
                              <PopoverTrigger>
                                <HelpCircle size={16} className="text-gray-400 cursor-help" />
                              </PopoverTrigger>
                              <PopoverContent className="w-80">
                                <div className="space-y-2">
                                  <h4 className="font-medium">Antecipação Automática</h4>
                                  <p className="text-sm">
                                    Com a antecipação automática, você recebe o valor total da venda em 1 dia útil, 
                                    ao invés de esperar pelo pagamento de cada parcela (30, 60, 90 dias...).
                                  </p>
                                  <p className="text-sm">
                                    A taxa de antecipação varia conforme o número de parcelas.
                                  </p>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <Switch
                            id="auto-advance"
                            checked={autoAdvance}
                            onCheckedChange={setAutoAdvance}
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={200}>
            <Card className="border-2 border-primary border-opacity-20 bg-primary/5">
              <CardHeader>
                <CardTitle>Resultado da Simulação</CardTitle>
                <CardDescription>
                  Veja quanto você receberá com base nas configurações escolhidas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-white border border-gray-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Valor bruto da venda:</span>
                      <span className="font-semibold">{formatCurrency(results.grossValue)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="text-gray-600 mr-1">Taxa aplicada:</span>
                        <Popover>
                          <PopoverTrigger>
                            <Info size={16} className="text-gray-400 cursor-help" />
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <p className="text-sm">
                              A taxa é calculada com base no método de pagamento, número de parcelas e opção de antecipação.
                              {autoAdvance && parseInt(installments) > 1 && (
                                <span className="block mt-2">
                                  Com a antecipação automática ativada para {installments} parcelas, 
                                  a taxa é de {formatPercentage(getTaxRate())}.
                                </span>
                              )}
                            </p>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <span className="font-semibold text-secondary">{formatPercentage(getTaxRate())}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Valor da taxa:</span>
                      <span className="font-semibold text-red-500">-{formatCurrency(results.taxAmount)}</span>
                    </div>
                    <div className="h-px w-full bg-gray-200 my-3"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">Você receberá:</span>
                      <span className="text-xl font-bold text-primary">{formatCurrency(results.netValue)}</span>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm text-gray-500">
                        {isInstallmentsEnabled && parseInt(installments) > 1 ? (
                          <>Em {installments} parcelas, {autoAdvance ? "recebendo em 1 dia útil (antecipação automática)" : "primeira parcela em 30 dias"}</>
                        ) : (
                          <>Recebendo em {results.receiptDate}</>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-gray-100">
                    <div className="text-center">
                      <p className="font-medium mb-2">Comparação com concorrentes</p>
                      <p className="text-sm text-gray-600 mb-4">
                        Economize até 40% em taxas comparado com outros meios de pagamento
                      </p>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Concorrente médio:</span>
                        <span className="font-semibold text-red-500">
                          {formatCurrency(results.marketAvgAmount)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Sua economia com RecebeAqui:</span>
                        <span className="font-semibold text-green-600">
                          {formatCurrency(results.savings > 0 ? results.savings : 0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default TaxSimulator;
