import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import FadeIn from "./FadeIn";

const TaxSimulator = () => {
  const [saleValue, setSaleValue] = useState<string>("1000");
  const [installments, setInstallments] = useState<string>("1");
  const [plan, setPlan] = useState<"iniciante" | "profissional" | "empresarial">("profissional");

  const getTaxRate = () => {
    const baseRates = {
      iniciante: 0.0199,
      profissional: 0.0149,
      empresarial: 0.0099
    };
    
    // Aumenta a taxa em 0.2% por parcela acima de 1
    const installmentsNum = parseInt(installments) || 1;
    const installmentFee = Math.max(0, (installmentsNum - 1) * 0.002);
    
    return baseRates[plan] + installmentFee;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const calculateResults = () => {
    const value = parseFloat(saleValue.replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
    const taxRate = getTaxRate();
    const taxAmount = value * taxRate;
    const netValue = value - taxAmount;
    
    return {
      grossValue: value,
      taxAmount,
      taxRate: taxRate * 100,
      netValue
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
                    <Label htmlFor="installments">Número de parcelas</Label>
                    <Input
                      id="installments"
                      name="installments"
                      type="number"
                      min="1"
                      max="21"
                      value={installments}
                      onChange={handleInputChange}
                    />
                    <p className="text-xs text-gray-500">De 1 a 21 parcelas</p>
                  </div>

                  <div className="space-y-2">
                    <Label>Plano</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        type="button"
                        variant={plan === "iniciante" ? "default" : "outline"}
                        className={plan === "iniciante" ? "bg-primary" : ""}
                        onClick={() => setPlan("iniciante")}
                      >
                        Iniciante
                      </Button>
                      <Button
                        type="button"
                        variant={plan === "profissional" ? "default" : "outline"}
                        className={plan === "profissional" ? "bg-primary" : ""}
                        onClick={() => setPlan("profissional")}
                      >
                        Profissional
                      </Button>
                      <Button
                        type="button"
                        variant={plan === "empresarial" ? "default" : "outline"}
                        className={plan === "empresarial" ? "bg-primary" : ""}
                        onClick={() => setPlan("empresarial")}
                      >
                        Empresarial
                      </Button>
                    </div>
                  </div>
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
                              A taxa é calculada com base no seu plano e no número de parcelas selecionado. 
                              Cada parcela adicional aumenta a taxa em 0,2%.
                            </p>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <span className="font-semibold text-secondary">{results.taxRate.toFixed(2)}%</span>
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
                        Em {installments === "1" ? "pagamento único" : `${installments} parcelas`}, 
                        recebendo em {plan === "empresarial" ? "mesmo dia (PIX)" : "1 dia útil"}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white border border-gray-100">
                    <div className="text-center">
                      <p className="font-medium mb-2">Comparação com concorrentes</p>
                      <p className="text-sm text-gray-600 mb-4">
                        Economize até 30% em taxas comparado com outros meios de pagamento
                      </p>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Concorrente médio:</span>
                        <span className="font-semibold text-red-500">
                          {formatCurrency(results.grossValue * 0.0299)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Sua economia com RecebeAqui:</span>
                        <span className="font-semibold text-green-600">
                          {formatCurrency(results.grossValue * 0.0299 - results.taxAmount)}
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
