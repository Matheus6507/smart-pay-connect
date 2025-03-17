
import FadeIn from "./FadeIn";

const Partners = () => {
  const partners = [
    {
      name: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    },
    {
      name: "WooCommerce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg",
    },
    {
      name: "Magento",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Magento_Logo.svg",
    },
    {
      name: "WordPress",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
    },
    {
      name: "Prestashop",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/PrestaShop.svg",
    },
    {
      name: "VTEX",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/VTEX_Logo.svg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <FadeIn>
          <h3 className="text-center text-lg font-medium text-gray-600 mb-10">
            Integre facilmente com as principais plataformas
          </h3>
        </FadeIn>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <FadeIn key={partner.name} delay={partners.indexOf(partner) * 100}>
              <div className="group flex items-center justify-center py-3 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-8 md:h-12 object-contain"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
