function validarFormulario() {
            var nome = document.forms["meuForm"]["nome"].value;
            var endereco = document.forms["meuForm"]["endereco"].value;
            var bairro = document.forms["meuForm"]["bairro"].value;
            var cep = document.forms["meuForm"]["cep"].value;
            var cidade = document.forms["meuForm"]["cidade"].value;
            var estado = document.forms["meuForm"]["estado"].value;
            var telefoneFixo = document.forms["meuForm"]["telefoneFixo"].value;
            var celular = document.forms["meuForm"]["celular"].value;
            var rg = document.forms["meuForm"]["rg"].value;
            var cpf = document.forms["meuForm"]["cpf"].value;

            if (nome == "" || endereco == "" || bairro == "" || cep == "" || cidade == "" || estado == "" || telefoneFixo == "" || celular == "" || rg == "" || cpf == "") {
                alert("Por favor, preencha todos os campos.");
                return false;
            }

            if (!validarCPF(cpf)) {
                alert("CPF inválido. Por favor, insira um CPF válido.");
                return false;
            }

            return true;
        }

        function validarCPF(cpf) {
            cpf = cpf.replace(/[^\d]+/g, '');
            if (cpf == '' || (cpf.length != 11 && cpf.length != 12)) 
                return false;
            var add = 0;
            for (var i = 0; i < 9; i++)
                add += parseInt(cpf.charAt(i)) * (10 - i);
            var rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
                return false;
            add = 0;
            for (i = 0; i < 10; i++)
                add += parseInt(cpf.charAt(i)) * (11 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(10)))
                return false;
            
            if (cpf.length == 12 && cpf.charAt(11).toLowerCase() !== 'x')
                return false;
                
            return true;
        }

        function validarRG(rg) {
            rg = rg.replace(/[^\d]+/g, '');
        
            if (rg.length !== 9) {
                return false;
            }
        
            return true;
        }
        