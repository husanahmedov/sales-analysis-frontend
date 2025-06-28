import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '@/utils/auth';

export function useAuthGuard() {
  const router = useRouter();

  onMounted(() => {
    if (!AuthService.isAuthenticated()) {
      router.push('/auth/login');
    }
  });
}
