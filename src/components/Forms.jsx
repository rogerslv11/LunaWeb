import  { useState } from 'react';

// Dados de exemplo para os campos Select
const opcoesEmpresa = ['Startup', 'Pequena Empresa', 'Média Empresa', 'Grande Empresa', 'Outro'];
const opcoesSolucao = ['Desenvolvimento Web', 'Aplicativo Mobile', 'Consultoria em DevOps', 'Integração de Sistemas', 'Outro'];
const comoSoube = ['Google', 'Redes Sociais', 'Indicação', 'Evento', 'Outro'];

// Componente de Input Genérico
const InputField = ({ label, name, type = 'text', placeholder, required = false, value, onChange }) => (
    <div className="flex flex-col space-y-2">
        <label htmlFor={name} className="text-sm font-medium text-gray-400">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 focus:outline-none transition duration-150 ease-in-out"
        />
    </div>
);

// Componente de Select Genérico
const SelectField = ({ label, name, options, required = false, value, onChange }) => (
    <div className="flex flex-col space-y-2">
        <label htmlFor={name} className="text-sm font-medium text-gray-400">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        <select
            id={name}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-lg text-gray-400 appearance-none focus:ring-green-500 focus:border-green-500 focus:outline-none transition duration-150 ease-in-out cursor-pointer"
        >
            <option value="" disabled className="text-gray-500">Selecione...</option>
            {options.map((option) => (
                <option key={option} value={option} className="text-white bg-[#1e1e1e]">{option}</option>
            ))}
        </select>
        {/* Adiciona um ícone de seta customizado para simular o design (opcional) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
    </div>
);

// Componente de Textarea
const TextareaField = ({ label, name, placeholder, required = false, value, onChange }) => (
    <div className="flex flex-col space-y-2">
        <label htmlFor={name} className="text-sm font-medium text-gray-400">
            {label}
            {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            rows="4"
            className="p-3 bg-[#1e1e1e] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 focus:outline-none transition duration-150 ease-in-out resize-none"
        ></textarea>
    </div>
);

const Forms = () => {
    // Estado inicial para os dados do formulário
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        emailCorporativo: '',
        telefoneWhatsapp: '',
        empresa: '',
        cargo: '',
        tamanhoEmpresa: '',
        tipoSolucao: '',
        orcamentoEstimado: '',
        prazoDesejado: '',
        descriacaoProjeto: '',
        comoSoube: '',
    });

    // Handler genérico para atualização do estado
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handler para o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados do Formulário:', formData);
        // Lógica de envio da solicitação (API, etc.)
        alert('Solicitação enviada! (Verifique o console para os dados)');
    };

    return (
        // Contêiner principal com fundo escuro
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-[#131313] p-8 md:p-12 rounded-xl shadow-2xl border border-[#2c2c2c]">
                
                
                {/* Formulário */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Linha 1: Nome Completo e E-mail Corporativo */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            label="Nome Completo"
                            name="nomeCompleto"
                            placeholder="Seu nome completo"
                            required
                            value={formData.nomeCompleto}
                            onChange={handleChange}
                        />
                        <InputField
                            label="E-mail Corporativo"
                            name="emailCorporativo"
                            type="email"
                            placeholder="seu.email@empresa.com"
                            required
                            value={formData.emailCorporativo}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Linha 2: Telefone/WhatsApp e Empresa */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            label="Telefone/WhatsApp"
                            name="telefoneWhatsapp"
                            placeholder="(XX) XXXX-XXXX"
                            required
                            value={formData.telefoneWhatsapp}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Empresa"
                            name="empresa"
                            placeholder="Nome da sua empresa"
                            required
                            value={formData.empresa}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Linha 3: Cargo e Tamanho da Empresa */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField
                            label="Cargo"
                            name="cargo"
                            placeholder="Seu cargo na empresa"
                            required
                            value={formData.cargo}
                            onChange={handleChange}
                        />
                        <SelectField
                            label="Tamanho da Empresa"
                            name="tamanhoEmpresa"
                            options={opcoesEmpresa}
                            required
                            value={formData.tamanhoEmpresa}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Linha 4: Tipo de Solução e Orçamento Estimado */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SelectField
                            label="Tipo de Solução"
                            name="tipoSolucao"
                            options={opcoesSolucao}
                            required
                            value={formData.tipoSolucao}
                            onChange={handleChange}
                        />
                        <SelectField
                            label="Orçamento Estimado"
                            name="orcamentoEstimado"
                            options={['R$ 10k - R$ 50k', 'R$ 50k - R$ 100k', 'Acima de R$ 100k']}
                            required
                            value={formData.orcamentoEstimado}
                            onChange={handleChange}
                        />
                    </div>
                    
                    {/* Linha 5: Prazo Desejado */}
                    <SelectField
                        label="Prazo Desejado"
                        name="prazoDesejado"
                        options={['1-3 Meses', '3-6 Meses', 'Acima de 6 Meses', 'Não Definido']}
                        required
                        value={formData.prazoDesejado}
                        onChange={handleChange}
                    />

                    {/* Linha 6: Descrição do Projeto */}
                    <TextareaField
                        label="Descrição do Projeto"
                        name="descriacaoProjeto"
                        placeholder="Conte-nos sobre seu projeto, desafios e objetivos que deseja alcançar."
                        required
                        value={formData.descriacaoProjeto}
                        onChange={handleChange}
                    />

                    {/* Linha 7: Como nos Conheceu? */}
                    <SelectField
                        label="Como nos conheceu?"
                        name="comoSoube"
                        options={comoSoube}
                        required
                        value={formData.comoSoube}
                        onChange={handleChange}
                    />

                    {/* Botão de Envio */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 text-lg font-bold text-black bg-[#84cc16] hover:bg-[#65a30d] rounded-lg shadow-lg transition duration-150 ease-in-out uppercase"
                    >
                        Enviar Solicitação
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Forms;