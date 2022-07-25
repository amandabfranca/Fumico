
## End Points:
Requisições para a API devem seguir os padrões:
| Método | End Point | Descrição |
|---|---|---|
| `GET` | /listReminder | Retorna lista com os lembretes criados. |
| `POST` | /createReminder | Utilizado para criar um novo lembrete. |
| `POST` | /updateReminder |Altera dados de um lembrete. |
| `POST` | /auth/login |Login do usuário no sistema |

## Observações
Não há conexão com banco de dados, os lembretes estão sendo salvos em arquivos;

As informações de usuário e senha estão mockadas, com intuito de testar a aplicação;

Nenhuma validação foi adicionada, como por exemplo verificar se o "id" existe antes da criação do próximo lembrete.
