FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . .

# Add PM2 
RUN npm install serve -g
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm i

RUN pnpm build

# build folder name is dist 

CMD ["serve", "-s", "dist", "-p", "8000"]

