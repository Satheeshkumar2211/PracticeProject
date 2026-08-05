import { Center, Stack, Title, Text, Button } from '@mantine/core';

const PageNotFound = ({ msg }: { msg?: string }) => (
  <Center style={{ minHeight: 'calc(100vh - 80px)' }}>
    <Stack align="center" gap="md">
      <Title order={1} style={{ fontSize: 'clamp(80px, 15vw, 160px)', lineHeight: 1 }} c="blue">
        404
      </Title>
      <Title order={3}>{msg ?? 'Page not found'}</Title>
      <Text c="dimmed" ta="center" maw={320}>
        The page you're looking for doesn't exist or has been moved.
      </Text>
      <Button onClick={() => (window.location.href = '/')}>← Back to Home</Button>
    </Stack>
  </Center>
);

export { PageNotFound };
export default PageNotFound;
